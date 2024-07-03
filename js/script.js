const companyElement = document.getElementById('company-name');
const companyAnnotation = RoughNotation.annotate(companyElement, { type: 'underline', color: '#fab700' });
companyAnnotation.show();
