import  Localidade  from '../models/localidade';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

export const getLocalidades = async () => {
    try {
        const response =  firebase.firestore().collection('localidades');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const localidade = new Localidade(
                doc.id,
                doc.data().nome_agricultor,
                doc.data().nome_propriedade,
                doc.data().cultura,
                doc.data().talhao,
            );

            array.push(localidade);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addLocalidade = async (localidade) => {
    try {
        await firebase.firestore().collection('localidades').doc().set(localidade);
    } catch (error) {
        throw error;
    }
}

export const getLocalidade = async (id) => {
    try {
        const localidade = await firebase.firestore().collection('localidades').doc(id);
        const data = await localidade.get();
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updateLocalidade = async (id, data) => {
    try {
        const localidade = await firebase.firestore().collection('localidades').doc(id);
        await localidade.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteLocalidade = async (id) => {
    try {
        await firebase.firestore().collection('localidades').doc(id).delete();
    } catch (error) {
        throw error;
    }
}