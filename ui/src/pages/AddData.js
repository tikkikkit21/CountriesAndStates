import React from 'react';
import Input from '../Input';
import Country from '../Country';

function AddData({code, update, onClickCountry, onClickState}) {
    return (
        <div className="py-2 px-5">
            <h1 className="text-center pb-3">Add Data</h1>
            <div className="pb-5 d-flex">
                <Input
                    label="country"
                    info={[
                        {name: "code", id: "code-country"},
                        {name: "name", id: "name-country"}
                    ]}
                />
                <input className="btn btn-primary" type="submit" onClick={onClickCountry}/>
            </div>
            
            <div className="pb-5 d-flex">
                <Input
                    label="state"
                    info={[
                        {name: "code", id: "code-state"},
                        {name: "name", id: "name-state"}
                    ]}
                />
                <Country
                    id="countries-state"
                    code={code}
                    update={update}
                    value="id"
                />
                <input className="btn btn-primary" type="submit" onClick={onClickState}/>
            </div>
        </div>
    )
}

export default AddData;