import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.getSession();

	if (!session) {
		throw redirect(302, '/login');
	}

	const email = session.user?.email;

	if (email && /@blackbeans.com.br/.test(email)) {
		return { session };
	} else {
		error(401, {
			message: 'E-mail não autorizado'
		});
	}
};
