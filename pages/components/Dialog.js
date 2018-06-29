import React from 'react'
import style from 'SCSS/components/dialog.scss'
import { inject, observer } from 'mobx-react';
@inject('rootStore')
@observer
class Dialog extends React.Component {
    handleClose(e, t) {
        this.props.rootStore.dialogStore.closeDialog(e, t)
    }
    render() {
        const { language, rootStore } = this.props
        return (
            <div className={style.dialogContainer}>
                {rootStore.dialogStore.toast.length > 0 && <div className={style.toastContainer}>
                    {
                        rootStore.dialogStore.toast.map((e, i) => {
                            return (
                                <div key={i} className={`${style.toastItem} ${style[e.theme]}`}>
                                    <span className={style.toastMessage}>{e.message}</span>
                                </div>
                            )
                        })
                    }
                </div>}

                {rootStore.dialogStore.alert.length > 0 && <div className={style.alertContainer}>
                    {
                        rootStore.dialogStore.alert.map((e, i) => {
                            return (
                                <div key={i} className={style.alertItem}>
                                    <p className={style.tipTitle}>{e.title}</p>
                                    <p className={style.tipMessage}>{e.message}</p>
                                    <div className={style.btnOk} onClick={() => this.handleClose(e, 'ok')}>{e.okText}</div>
                                </div>
                            )
                        })
                    }
                </div>}
                {rootStore.dialogStore.confirm.length > 0 && <div className={style.confirmContainer}>
                    {
                        rootStore.dialogStore.confirm.map((e, i) => {
                            return (
                                <div key={i} className={style.confirmItem}>
                                    <p className={style.tipTitle}>{e.title}</p>
                                    <p className={style.tipMessage}>{e.message}</p>
                                    <div className={style.btnCancel} onClick={() => this.handleClose(e, 'cancel')}>{e.cancelText}</div>
                                    <div className={style.btnOk} onClick={() => this.handleClose(e, 'ok')}>{e.okText}</div>
                                </div>
                            )
                        })
                    }
                </div>}
            </div>
        )
    }
}

export default Dialog