import { fail } from '@sveltejs/kit';


export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const eingaben = {
            name: data.get('name'),
            email: data.get('email'),
            nachricht: data.get('nachricht'),

        }

        if (!eingaben.name || !eingaben.email || !eingaben.nachricht) {
            return fail(400, { eingaben, fehler: true });
        }

        return { eingaben, datum: new Date().toJSON(), success: true };
    }
};


