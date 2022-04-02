import { Container } from "react-bootstrap";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme,GlobalStyles } from "./Themes";

const StyledApp = styled.div``;

const ENG_TH =()=>{

    const [theme,setTheme] = useState("light");

    const themeToggle=()=>{
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const lang = {ENG:{
                        component:"English Component",
                        test:"English test",
                        graduated:"Ronphibun keart wasoontaraphiwat",
                        program:"",
                        GPA_high:"2.56",
                        graduated_univer:"Nakhon si thammarat Rajabhat University",
                        bacelor:"Bussiness computer",
                        GPA_univer:"3.57",
                        games:"Play games",
                        movie:"Watch movie",
                        reading:"Reading",
                        music:"Listen",
                        full_name:"Name : Worawit Saengprom",
                        nickname:"Nickname : Lens",
                        age:"24 years old"
                },TH:{
                        component:"คอมโพเนนท์แบบไทย",
                        test:"ทดสอบแบบภาษาไทย",
                        graduated:"ร่อนพิบูลย์เกียรติวสุนธราภิวัฒก์",
                        program:"ศิลป์ - คำนวณ",
                        GPA_high:"2.56",
                        graduated_univer:"มหาวิทยาลัยราชภัฏนครศรีธรรมราช",
                        bacelor:"คอมพิวเตอร์ธุรกิจ",
                        GPA_univer:"3.57",
                        games:"เล่นเกม",
                        movie:"ดูหนัง",
                        reading:"อ่านหนังสือ",
                        music:"ฟังเพลง",
                        full_name:"ชื่อ : นายวรวิทย์ แสงพรหม",
                        nickname:"ชื่อเล่น : เลนส์",
                        age:"อายุ : 24 ปี"

                }}
    return(
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Container>
                <GlobalStyles>
                    <StyledApp>
                    <div>
                        <h2>ENG to TH component</h2>
                        <p>{lang.ENG.component}</p>
                        <p>{lang.ENG.test}</p>
                        <p>{lang.TH.component}</p>
                        <p>{lang.TH.test}</p>
                        <button onClick={()=>themeToggle()}>Change theme</button>
                    </div>
                    </StyledApp>
                </GlobalStyles>
            </Container>
        </ThemeProvider>
    )
}

export default ENG_TH;