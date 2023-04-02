import { redirect } from '@sveltejs/kit';
import { authSessionName } from '$lib/config';

export const handle = async ({ event, resolve }) => {
	const authSession = event.cookies.get(authSessionName);

	if (!authSession) {
		return await resolve(event);
	}

	if (event.url.pathname.startsWith('/admin')) {
		if (!authSession) {
			throw redirect(302, '/auth/login');
		}
	}

	// ไปทำส่วนดึงข้อมูลกันเอาเองเน้อ
	const username = 'kanexkane';
	const role = 'admin';

	event.locals.user = {
		username: username,
		role: role
	};

	return await resolve(event);
};
