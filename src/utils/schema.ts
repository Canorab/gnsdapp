import {z} from 'zod';

export const signupSchema = z
	.object({
		// _id: z.string(),
		firstName: z.string().min(2, {message: 'Requires at least 2 characters'}),
		lastName: z.string().min(2, {message: 'Requires at least 2 characters'}),
		username: z.string().min(3, {message: 'Requires at least 3 characters'}),
		password: z.string().min(8, {message: 'Requires at least 8 characters'}),
		// ConfirmPassword: z.string().min(8, {message: 'Requires at least 8 characters'}),
		email: z.string().email({message: 'Invalid email addreess'}),
		// Domains: z.number().positive(),
		wallet: z
			.string()
			.regex(/^0x/, 'Invalid Wallet address - use a polygon chain address')
			.min(10, {message: 'A valid wallet address is required'})
			.optional(),
		// ReferrerId: z.string(),
		referrerUsername: z.string().min(3, {message: 'Referrer username is Required'}),
		// Timestamp: z.date(), // Timestamp should be auto set by Mongoose in the nodejs app
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

export const loginSchema = z.object({
	username: z.string().min(3, {message: 'Requires at least 3 characters'}),
	password: z.string().min(8, {message: 'Requires at least 8 characters'}),
	// Terms: z.boolean(),
});
// .superRefine(({terms}, ctx) => {
// 	if (!terms) {
// 		ctx.addIssue({
// 			code: z.ZodIssueCode.custom,
// 			message: 'You must accept the terms to proceed',
// 			path: ['terms'],
// 		});
// 	}
// });

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const referralSchema = z.object({
	referrerUsername: z.string().min(3, {message: 'A valid referral username is required !'}),
	wallet: z.string().min(8, {message: 'A valid wallet address is required !'}).optional(),
});

export type ReferralSchemaType = z.infer<typeof referralSchema>;

// Export type ReferralFormProps = {
// 	referrerUsername: string;
// 	wallet: string;
// };

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
