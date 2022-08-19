import { Component } from 'react';
import InputName from './Input/Name/InputName';
import FormPhonebook from './Form/Form';
import LabelPhonebook from './Label/Label';
import InputNumber from './Input/Number/InputNumber';
import ButtonSubmit from './Button/ButtonSubmit';
class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  clickOnBtnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <div>
        <FormPhonebook onSubmit={this.clickOnBtnSubmit}>
          <LabelPhonebook title="Name">
            <InputName value={this.state.name} onChange={this.handleChange} />
          </LabelPhonebook>
          <LabelPhonebook title="Number">
            <InputNumber
              value={this.state.number}
              onChange={this.handleChange}
            />
          </LabelPhonebook>
          <ButtonSubmit text="Add contact" />
        </FormPhonebook>
      </div>
    );
  }
}

export default Phonebook;
