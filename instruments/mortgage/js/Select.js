const {Select} = window.antd;
const Option = Select.Option;

const Autocomplete = (props) => {
  return (
    <Form.Item label='Тип квартиры:' {...formItemLayout}>
      <Select
        style={{ width: 200 }}
        autofocus
        placeholder="Выберите тип жилья">
        <Option value="new_building">Квартира в новостройке</Option>
        <Option value="finished_building">Готовая квартира</Option>
        <Option value="countryhouse">Загородный дом</Option>
      </Select>
    </Form.Item>
  )
}
