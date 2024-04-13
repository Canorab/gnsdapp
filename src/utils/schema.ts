import {Signup} from 'features/auth/Signup';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

export const signupSchema = z
	.object({
		// _id: z.string(),
		firstName: z.string().min(2, {message: 'Requires atleast 2 characters'}),
		lastName: z.string().min(2, {message: 'Requires atleast 2 characters 1'}),
		username: z.string().min(3, {message: 'Requires atleast 3 characters'}),
		password: z.string().min(8, {message: 'Requires at least 8 characters'}),
		// ConfirmPassword: z.string().min(8, {message: 'Requires at least 8 characters'}),
		email: z.string().email({message: 'Invalid email addreess'}),
		// Domains: z.number().positive(),
		// Wallet: z.string().min(1, {message: 'Wallet Address is Required'}),
		// referrerId: z.string(),
		// referrerUsername: z.string().min(1, {message: 'Referrer username is Required'}),
		// timestamp: z.date(), // Timestamp should be auto set by Mongoose in the nodejs app
		terms: z.boolean(),
	})
	.superRefine(({terms}, ctx) => {
		if (!terms) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'You must accept the terms to proceed',
				path: ['terms'],
			});
		}
	});

export type SignupSchemaType = z.infer<typeof signupSchema>;

export const loginSchema = z
	.object({
		username: z.string().min(3, {message: 'Requires atleast 3 characters'}),
		password: z.string().min(8, {message: 'Requires at least 8 characters'}),
		terms: z.boolean(),
	})
	.superRefine(({terms}, ctx) => {
		if (!terms) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'You must accept the terms to proceed',
				path: ['terms'],
			});
		}
	});

export type LoginSchemaType = z.infer<typeof loginSchema>;

// Export defaultValues: {
//     firstName: '',
//     lastName: '',
//     password: '',
//     confirmPassword: '',
//     email: '',
//     domains: 0,
//     wallet: '',
//     referrerId: '',
//     referrerUsername: '',
//     timestamp: new Date()
// }

// onSubmit={handleSubmit((data) => {
//     console.log(data);
// })}
