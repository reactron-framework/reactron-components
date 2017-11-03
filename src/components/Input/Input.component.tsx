import * as classNames from 'classnames';
import * as React from 'react';
// define interface speciying the strucure of the props of this component
export interface IPropsInput  {
  type: string;

}

export default class Input extends React.Component<IPropsInput, {}> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    const { type= 'text', ...props } = this.props;
    const classes = classNames(
      'input-control text',
      'form-group',
    );
    return (
    <div className={classes}>
        <input type={type} {...this.props} className="form-control"/>
    </div>);
  }
}
