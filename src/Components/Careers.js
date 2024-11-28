import React from "react";
import '../Style/Careers.css'

function Careers(){
    // const [currentIndex, setCurrentIndex] = useState(0)

    // const PreviousSlide = () => {
    //     const newIndex = currentIndex === 0? imageFiles.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }

    // const NextSlide = () => {
    //     const newIndex = currentIndex === imageFiles.length - 1? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }

    return(
        <div className="Careers_container">
            <h1>
                경력
            </h1>
            <div className="career_index">
                <p className="career_title">1. 위드런(With Run) / 웹 퍼블리셔 / 2024.08 ~ 2024.10 (프리랜서)</p>
                <p className="career_description">
                    {`온라인 문제은행 시스템 구축 업무를 맡아서 온라인 문제은행 시스템 문제 화면을 웹퍼블리싱 하는 작업을 진행했습니다.
                    수학, 영어, 과학 등 교사분들이 만들어서 보내주신 문제들을 웹 화면으로 구현시키는 작업을 진행하였고,
                    계약 기간 내에 할당받은 문제를 모두 퍼블리싱 한 후 추가적으로 업무를 돕고 계약 종료되었습니다.`}
                </p>
            </div>
        </div>
    )
}
export default Careers