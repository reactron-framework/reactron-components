import * as React from 'react';
import * as classnames from 'classnames';
import { DefaultTheme } from '../../utls';

interface IAppbar {
  children: any;
  theme: DefaultTheme
}
export default class Appbar extends React.Component <IAppbar, {}>{
  constructor(props: IAppbar) {
    super(props);
  } 

  render(){
    let classNames = classnames(
      'app-bar toolbar toolbar-header',
    )
    const {children,  ...props} = this.props;
    return (
      <div className={classNames} {...props}>
        {children}
      </div>
    )
  }
}