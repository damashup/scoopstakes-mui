import * as yup from 'yup';

const validationSchema = yup.object().shape({
    results: yup.array().of(
        yup.object().shape({
            // competition: yup.string().max(10),
        })
    )
});

export default validationSchema