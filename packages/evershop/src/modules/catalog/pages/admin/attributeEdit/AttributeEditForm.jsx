import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import Area from '@components/common/Area';
import { Form } from '@components/common/form/Form';
import { get } from '@annapoorani/annapoorani/src/lib/util/get';

export default function AttributeEditForm({ action }) {
  const id = 'attributeForm';
  return (
    <Form
      method="PATCH"
      action={action}
      onError={() => {
        toast.error('Something wrong. Please reload the page!');
      }}
      onSuccess={(response) => {
        if (response.error) {
          toast.error(
            get(
              response,
              'error.message',
              'Something wrong. Please reload the page!'
            )
          );
        } else {
          toast.success('Attribute saved successfully!');
        }
      }}
      submitBtn={false}
      id={id}
    >
      <Area id={id} noOuter />
    </Form>
  );
}

AttributeEditForm.propTypes = {
  action: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    action: url(routeId: "updateAttribute", params: [{key: "id", value: getContextValue("attributeUuid")}]),
    gridUrl: url(routeId: "attributeGrid")
  }
`;
