import React, {useState} from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../styles/footer.css"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



export default function Footer() {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    

    return (
        <div className="fixed-bottom footer-dark" style={{marginTop:"50",position:'static'}}>
            <footer>
                


                <div style={{ display: 'grid', justifyContent: 'center' }}>

                    <div className="text-center mt-5">
                        



                        <div className="col item social">
                          
                            <a href="https://www.linkedin.com"><TiSocialLinkedin/></a>
                            <a href="https://www.instagram.com/samih.fn/"><AiFillInstagram/></a>
                            <a href="https://github.com/Bakka08"><AiFillGithub/></a>
                        </div>
                    </div>

                    <p className="copyright">Samih saad © 2023</p>
                </div>


            </footer>
        </div>
    );
}
