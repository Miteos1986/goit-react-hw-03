import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

function ContactForm(onAdd) {
    const nameField = useId();
  const phoneField = useId();
  return (
    <Formik
      initialValues =
      {{
        name: '',
        phone: '',
      }}
      onSubmit =
      {(values, actions) => {
        onAdd({
          id: Date.now(),
          ...values,
        });
        actions.resetForm();
      }}
      >
      <Form>
        <Field type="text" name="name" id={nameField} placeholder="Enter Name" />
        <br />
        <Field type="number" name="phone" id={phoneField} placeholder="Enter Phone"/>
        <button type='submit' >Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
