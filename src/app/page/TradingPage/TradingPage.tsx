import 'bootstrap/dist/css/bootstrap.min.css'
import './TradingPage.scss'
import { useForm } from "react-hook-form";

type TradingType = {
    amount: string,
    address: string,
    description: string,
}

export const TradingPage = () => {
    const { register, handleSubmit } = useForm<TradingType>();
    const onSubmit = handleSubmit((data:any) => {
        alert(JSON.stringify(data))
        console.log(data)
    });
    return (
        <div className="container tradingPage">
            <form className="container" onSubmit={onSubmit}>
                <div className="_title">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                    <span className="ml-3">Send Coin</span>
                </div>
                <div className="_body">
                    <div className="row form-element">
                        <label className="form-label col-12">
                            <div className="form-element-title">
                                <span>Amount</span>
                            </div>
                        </label>
                        <input ref={register({required:true})} className="form-control form-group col-6 input-custom" type="text" 
                            id="amount" name="amount"
                            placeholder="$0.00" height="48px" data-lpignore="true" spellCheck="true"/>
                    </div>
                    <div className="row form-element">
                        <label className="form-label col-12">
                            <div className="form-element-title">
                                <span>To</span>
                            </div>
                        </label>
                        <input ref={register} id="address" name="address" 
                            className="form-control form-group col-6 input-custom" 
                            type="text" required/>
                    </div>
                    <div className="row form-element">
                        <label className="form-label col-12">
                            <div className="form-element-title">
                                <span>Desciption</span>
                            </div>
                        </label>
                        <textarea id="description" name="description" 
                        ref={register} placeholder="What's this transaction for? (optional)" 
                        rows={3} maxLength={100} required className="form-control form-group col-6 input-custom"></textarea>
                    </div>
                    <div className="row col-6 btn-controller">
                        <button type="submit" className="btn col-5 btn-primary btn-custom">Send</button>
                        <button type="reset" className="btn offset-2 col-5 btn-danger btn-custom">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    )
}