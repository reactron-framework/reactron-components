import * as classNames from 'classnames';
import * as React from 'react';
// define interface speciying the strucure of the props of this component
const enum stateTypes {
  empty = '',
  error = 'error',
  warning = 'warning',
  success = 'success',
  required = 'required',
}
export interface IPropsInput  {
  type: string;
  className: string;
  state: stateTypes;
  id: string;
  big: boolean;
}

export default class Input extends React.Component<IPropsInput, {}> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    const { type= 'text', state= '', big= false, id, children, className, ...props } = this.props;
    const divClass = classNames(
      'input-control text',
      'form-group',
      {
        'big-input': big,
      },
    );
    const inputClass = classNames(
      state,
      className,
      'form-control',
    );
    return (
    <div className={divClass}>
        <label htmlFor={id}>{children}</label>
        <input type={type} {...props} id={id} className={inputClass}/>
    </div>);
  }
}
