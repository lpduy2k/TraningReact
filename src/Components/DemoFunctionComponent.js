import React from 'react'
// React function component (thẻ <DemoFunctionComponent> </DemoFunctionComponent>)
export default function DemoFunctionComponent() {
    return ( // nội dung thẻ chứa trong lệnh return, lưu ý: nội dung phải được bao bọc bởi 1 thẻ
        <div className="container bg-dark text-white">
            <div className="display-4 p-5">
                Component
            </div>
            <div className="p-2 pl-5"> 
                Nội dung component
            </div>
        </div>
    )
}
