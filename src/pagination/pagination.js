import React, {Component} from 'react';
import './pagination.css';
// import SwapiServise from "../services/swapi";

const Pagination = ({dataArray, getNumPages, page}) => {
    // const showPages = ()=>{
    //     const count = Math.ceil(page.count / 10);
    //     return page.data.map((item)=>
    //        <li className="page-item" onClick={() => getNumPages(item.id)} key={item.id}><a className="page-link" href="/#">{item.id}</a>
    //      </li>)
    // }
    const showPages = () => {
        const count = Math.ceil(dataArray.count / 10);
        let content = [];
        for (let i = 1; i <= count; i++) {
            if (i === page) {
                content.push(
                    <li className="page-item active" onClick={() => getNumPages(i)}>
                        <a className="page-link" href="/#">{i} <span className="sr-only">(current)</span></a>
                    </li>
                )
            } else {
                content.push(<li className="page-item" onClick={() => getNumPages(i)}><a className="page-link"
                                                                                         href="/#">{i}</a>
                </li>)
            }
        }

        return content;
    }
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href={dataArray.previous} tabIndex="-1">Previous</a>
                </li>
                {/*{page.data.map((item)=>*/}
                {/*    <li className="page-item" onClick={() => getNumPages(item.id)}><a className="page-link" href="/#">{item.id}</a>*/}
                {/*    </li>)}*/}
                {showPages()}
                <li className="page-item">
                    <a className="page-link" href={dataArray.next}>Next</a>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination;
// export default class Pagination extends Component {
//
//     componentDidMount() {
//         this.showPages();
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(prevProps.page !== this.props.page){
//             this.showPages();
//         }
//     }
//
//     showPages () {
//         const {page, getNumPages} = this.props;
//
//         const count = Math.ceil(page.count / 10);
//         console.log(count)
//         let i = 0;
//         let li;
//         // for (i = 0; i <= count; i++) {
//         //     return  li+=<li className="page-item" onClick={() => getNumPages(i)}><a className="page-link" href="/#">i</a>
//         //     </li>
//         // }
//         return <li className="page-item" onClick={() => getNumPages(i)}><a className="page-link" href="/#">i</a>
//             //     </li>;
//     }
//
//
//     render() {
//
//
//         return (
//             <nav aria-label="...">
//                 <ul className="pagination">
//                     <li className="page-item disabled">
//                         <a className="page-link" href='{}' tabIndex="-1">Previous</a>
//                     </li>
//                     <li className="page-item active">
//                         <a className="page-link" href="/#">1 <span className="sr-only">(current)</span></a>
//                     </li>
//                     {this.showPages}
//                     <li className="page-item">
//                         <a className="page-link" href='{next}'>Next</a>
//                     </li>
//                 </ul>
//             </nav>)
//     }
// }