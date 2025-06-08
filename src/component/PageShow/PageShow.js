import dataOfChelseyDieTrich from "../../data/FakeDataList/ChelseyDietrich"
import dataOfClementinadubuque from "../../data/FakeDataList/Clementinadubuque"
import dataOfClementineBauch from "../../data/FakeDataList/ClementineBauch"
import dataOfDennisSchulist from "../../data/FakeDataList/DennisSchulist"
import dataOfErvinHowell from "../../data/FakeDataList/ErvinHowell"
import dataOfGlennaReichert from "../../data/FakeDataList/GlennaReichert"
import FakeDataListItem from "../FakeDataListItem/FakeDataListItem"
import dataofKurtisWeissnat from "../../data/FakeDataList/KurtisWeissnat"
import dataOfLeanneGraham from "../../data/FakeDataList/LeanneGraham"
import dataOfNicholasRunolfsdottir from "../../data/FakeDataList/NicholasRunolfsdottir"
import NotInList from "../../data/FakeDataList/NotInList"
import dataOfPatriciaLebsack from "../../data/FakeDataList/PatriciaLebsack"
import './PageShow.css'
import NavBarPageShow from "../NavBarPageShow/NavBarPageShow"



const PageShow = ({ textInput }) => {


    const obj = {
        "Leanne Graham": dataOfLeanneGraham,
        "Ervin Howell": dataOfErvinHowell,
        "Clementine Bauch": dataOfClementineBauch,
        "Patricia Lebsack": dataOfPatriciaLebsack,
        "Chelsey Dietrich": dataOfChelseyDieTrich,
        "Mrs. Dennis Schulist": dataOfDennisSchulist,
        "Kurtis Weissnat": dataofKurtisWeissnat,
        "Nicholas Runolfsdottir V": dataOfNicholasRunolfsdottir,
        "Glenna Reichert": dataOfGlennaReichert,
        "Clementina DuBuque": dataOfClementinadubuque
    }

    let content = ''
    for (const key in obj) {
        if (key.toLowerCase() === textInput.toLocaleLowerCase()) {
            content = obj[key].map((data) => {
                return <FakeDataListItem key={data.id} data={data} />
            })
            break;
        } else {
            content = <NotInList />
        }
    }



    return (
        <div>
            <NavBarPageShow textInput={textInput}/>
            <div className="contentData">{content}</div>
        </div>
    )

}

export default PageShow