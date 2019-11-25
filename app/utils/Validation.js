import t from "tcomb-form-native";



export default (formValidation = {
    email: t.refinemet(t.String, value => {
        return /@/.test(value);
    }),
    password: t.refinemet(t.String, value => {
        return value.length >= 6;

    })     
});