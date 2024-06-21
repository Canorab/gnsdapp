import {type EntityState, createEntityAdapter, createSelector} from '@reduxjs/toolkit';

import {apiSlice} from '../../app/api/apiSlice';
import {DomainType, type UserType} from '@/types/propTypes';
import {type RootState} from '@/app/store';

export const usersAdapter = createEntityAdapter<UserType>({
	// SelectId: (user: UserType) => user._id,
	// SortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
	// sortComparer: (a, b) => a.username.localeCompare(b.username),
});

export const initialState = usersAdapter.getInitialState();
// Export type UserType = {

// }
export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<EntityState<UserType, string>, string | void>({
			// Query: () => 'users'
			query: () => ({
				url: 'users',
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: UserType[], meta, args) {
				const loadedUsers = responseData.map((user) => {
					user.id = user._id;
					return user;
				});
				return usersAdapter.setAll(initialState, loadedUsers);
			},
			providesTags(result, error, arg) {
				if (result?.ids) {
					return [
						{type: 'User', id: 'LIST'},
						...result.ids.map((id) => ({type: 'User' as const, id})),
					];
				}

				return [{type: 'User', id: 'LIST'}];
				// Return result ? result.map(({id}) => ({type: 'Posts', id})) : [];
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),

		// Should be used to fetch a user's refferals for public(non-admin) dashboards
		// update; use for both public and admin dashboards
		getUserReferrals: builder.query<EntityState<UserType, string>, string>({
			// Query: () => 'users'
			query: (username) => ({
				url: `users/referrals/${username}`,
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: UserType[], meta, args) {
				const loadedUsers = responseData.map((user) => {
					user.id = user._id;
					return user;
				});
				return usersAdapter.setAll(initialState, loadedUsers);
			},
			providesTags(result, error, arg) {
				if (result?.ids) {
					return [
						{type: 'User', id: 'LIST'},
						...result.ids.map((id) => ({type: 'User' as const, id})),
					];
				}

				return [{type: 'User', id: 'LIST'}];
				// Return result ? result.map(({id}) => ({type: 'Posts', id})) : [];
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),
		// Move this mutaton to the authApiSlice as soon as it is ready.
		// the whole of the usersApiSlice should be locked down and inaccessible to the public
		// New users should be added via the auth/signup endpoint
		addNewUser: builder.mutation<UserType, Partial<UserType>>({
			query: (newUser) => ({
				url: 'users',
				method: 'POST',
				body: newUser,
				// Body: {
				// 	...initialUserData,
				// },
			}),
			invalidatesTags: [{type: 'User', id: 'LIST'}],
		}),
		// You can use this to ban a  user via the admin frontend App
		// <UserType, {id: string; data: Partial<UserType>}>
		updateUser: builder.mutation<UserType, {id: string; data: Partial<UserType>}>({
			query: ({id, data}) => ({
				// Url: `users/${updatedUserData._id}`,
				url: `users/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: (result, error, arg) => [{type: 'User', id: arg.id}],
		}),
		deleteUser: builder.mutation<UserType, {id: string}>({
			query: ({id}) => ({
				url: `/users/${id}`,
				method: 'DELETE',
				body: id,
			}),
			invalidatesTags: (result, error, arg) => [{type: 'User', id: arg.id}],
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserReferralsQuery,
	useAddNewUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
	usePrefetch,
} = usersApiSlice;

// Returns the query result object for the getusers query. i.e results from /users endpoint
export const selectAllUsersResult = usersApiSlice.endpoints.getUsers.select();

// Creates memoized selector
const selectAllUsersData = createSelector(
	selectAllUsersResult,
	(usersResult) => usersResult.data, // Normalized state object with ids & entities
);

// Returns the query result object for the getUserReferrals query. i.e results from /users/referrals endpoint
// use in the frontend component where this data is needed. pass it the id of the logged-in user.
// Then use the useAppSelector hook to select the data from the Root state.
export const selectAuthUserReferrals = usersApiSlice.endpoints.getUserReferrals.select('id');

// Create a memoized selector that returns usersList given a user Id in the .select()
// const selectUserReferralData = createSelector([], () => {});

// GetSelectors creates these selectors and we rename them with aliases using destructuring
// export const {
// 	selectAll: selectAllUsers,
// 	selectById: selectUserById,
// 	selectIds: selectUserIds,
// 	selectTotal: selectUsersCount,
// 	// Pass in a selector that returns the users slice of state
// } = usersAdapter.getSelectors((state: RootState) => selectUsersData(state) ?? initialState);
export const usersSelectors = usersAdapter.getSelectors(
	(state: RootState) => selectAllUsersData(state) ?? initialState,
);

export default usersApiSlice;
