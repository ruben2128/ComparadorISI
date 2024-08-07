import React from 'react'
import { CheckBox, Collapse } from 'antd';

const {Panel} = Collapse

const procesador = [
    {
        "_id": 1,
        "name": "Intel"
    },
    {
        "_id": 2,
        "name":"AMD"
    }
]

function CheckBox(){
    return(
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header key = "1">
                    {procesador.map((value,index) => (
                    <React.Fragment key={index}>
                        <CheckBox
                            onchange
                            type="checkbox"
                            checked
                        />
                        <span>{value.name}</span>
                    </React.Fragment>
                    ))}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
