import { fail } from '@sveltejs/kit';
import { krisengebiete } from './krisengebiete.js';

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const eingaben = {
            abholung: data.get('abholung'),
            strasse: data.get('strasse'),
            hausnummer: data.get('hausnummer'),
            plz: data.get('plz'),
            ort: data.get('ort'),
            krisengebiet: data.get('krisengebiet'),
            art: data.get('art'),
            groesse: data.get('groesse'),
            farbe: data.get('farbe'),
            zustand: data.get('zustand'),
            fuerWen: data.get('fuerWen'),
            bemerkungen: data.get('bemerkungen'),
        }

        let fehler = [];
        const juteGabePLZ = '12345';
        let eingabePLZ = eingaben.plz;

        if (eingaben.abholung) {
            if (!eingaben.strasse) {
                fehler.push('Pflichtfeld - Strasse');
            }
            if (!eingaben.hausnummer) {
                fehler.push('Pflichtfeld - Hausnummer');
            }
            if (!eingaben.plz || !eingaben.ort) {
                fehler.push('Pflichtfeld - PLZ');
            }
            if (!eingaben.ort) {
                fehler.push('Pflichtfeld - Ort');
            }

            if (eingaben.plz) {
                if (juteGabePLZ.substring(0, 2) !== eingabePLZ.substring(0, 2)) {
                    fehler.push('Warnung - PLZ');
                }
            }
        }

        if (!krisengebiete.includes(eingaben.krisengebiet) || !eingaben.art) {
            fehler.push('Pflichtfeld - Krisengebiet');
        }

        if (!eingaben.art) {
            fehler.push('Pflichtfeld - Art');
        }


        if (fehler.length > 0) {
            return fail(400, { eingaben, fehler });
        }

        return { eingaben, datum: new Date().toJSON(), success: true };
    }
};



