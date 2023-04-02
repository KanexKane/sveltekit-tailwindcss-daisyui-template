import { fail, redirect } from '@sveltejs/kit';
import { authSessionName } from '$lib/config';

const errorMessage = 'ผิดพลาดอะไรสักอย่างเนี่ยแหละ ลองใหม่!';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData());
		const { username, password } = data;

		// เช็คก่อนว่าค่าที่ส่งมาไม่ใช่ค่าว่างหรือไม่ใช่ string เพราะมีบางทีที่ type มันไม่ใช่ string
		if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
			return fail(400, { message: errorMessage });
		}

		const user = { username: 'kanexkane', password: '123123' };

		if (!user) {
			return fail(400, { message: errorMessage });
		}

		const userPassword = password === user.password;

		if (!userPassword) {
			return fail(400, { message: errorMessage });
		}

		cookies.set(authSessionName, 'login-success-jwt-or-randomUUID', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 365 // 1 year
		});

		throw redirect(302, '/');
	}
};
