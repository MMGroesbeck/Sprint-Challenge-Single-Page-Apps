import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SearchForm = ({values, touched, errors, status, updateSearch}) => {
  const [query, setQuery] = useState("");
  useEffect (() => {
    status && setQuery(query => status);
    updateSearch(query)
  },[status])
  return (
    <div>
      <Form>
        <label htmlFor="search">Search:
          <Field id="name" type="text" name="name" placeholder="Search" />
          {touched.searchTerm && errors.searchTerm && (<p className="errors">{errors.searchTerm}</p>)}
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

const FormikSearchForm = withFormik({
  mapPropsToValues({searchTerm}) {
      return {
          searchTerm: searchTerm || ""
      };
  },
  validationSchema: Yup.object().shape({
      searchTerm: Yup.string().required("Waiting for search...")
  }),
  handleSubmit(values, {setStatus, resetForm}){
          setStatus(values.searchTerm);
          resetForm();
  }
})(SearchForm);

export default FormikSearchForm;

// export default function SearchForm() {
 
//   return (
//     <section className="search-form">
//      // Add a search form here
//     </section>
//   );
// }
