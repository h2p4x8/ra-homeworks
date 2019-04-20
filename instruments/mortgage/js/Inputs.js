const {Input} = window.antd;
const Inputs = (props) => (
  <div>
    <Form.Item label='Стоимость:' {...formItemLayout}>
      <Input type='number' value="2000000" size='default'addonAfter='руб.'/>
    </Form.Item>
    <Form.Item label=' На руках:' {...formItemLayout}>
      <Input type='number' value="200000" size='default' addonAfter='руб.'/>
    </Form.Item>
    <Form.Item label='Срок кредита:' {...formItemLayout}>
      <Input type='number' value="5" size='default' addonAfter='руб.'/>
    </Form.Item>
  </div>
);
