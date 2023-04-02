import { redirect } from '@sveltejs/kit';
import { authSessionName } from '$lib/config';

export const POST = ({ cookies }) => {
	cookies.delete(authSessionName, { path: '/' });

	throw redirect(302, 'login');
};
