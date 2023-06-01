import React from 'react';
import Country from '../Country';
import State from '../State';

function GetData({code, update, onChange}) {
    return (
        <div className="container py-2 px-5">
            <h1 className="text-center pb-3">Lookup Data</h1>
            <div className="row d-flex justify-content-center ">
                <Country
                    id="countries"
                    code={code}
                    update={update}
                    value="code"
                    onChange={onChange}
                />
                <State id="states"
                    code={code}
                    update={update}
                />
            </div>
        </div>
    );

}

export default GetData;