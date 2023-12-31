import  Row  from 'react-bootstrap/Row';
import  Container from 'react-bootstrap/Container';
import  Col  from 'react-bootstrap/Col';
import  Button from 'react-bootstrap/Button';
import "./MainHome.scss"
import Soul1 from '../../assets/soul-1-png.png'
import MainSection from '../MainSection/MainSection';
export default function MainHome() {

    return(
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="head_left">
                            <span className='h_subTitle'>Saúde e Praticidade</span>
                            <div className="w-75 mt-2 h_title">
                                <h1 style={{ color: '#03658C' }}>Soul</h1>
                                <h1 style={{ color: '#3D3F42' }}>Dispositivo</h1>
                                <h1 style={{ color: '#3D3F42' }}>De Monitoramento Remoto</h1>
                            </div>
                            <p className='text-secondary'>
                                Descubra um novo mundo de saúde remota, com muita mais praticidade, facilidade e segurança na palma da sua mão.
                            </p>

                            {/* Talvez se der tempo eu faça o modal para a pessoa pre-ordar */}
                            {/* <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                                <Button className='bg_login fw-bold border-0'>Pre-order!</Button>
                                <Button className='contact_btn' href='/aboutus'>Contact Us</Button>
                            </div> */}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="head_right">
                            <div className="imageContainer d-flex justify-content-end align-items-center shadow-sm rounded">
                                <img src={Soul1} alt="Soul-imagem" className='head_rightImg' />
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        {/* <img src={coock} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} /> */}
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Monitoramento Remoto</h5>
                        <p className='text-secondary'>Seja capaz de monitorar o seu dispositivo Soul, ou de algum familiar através do seu celular!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        {/* <img src={delivery} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} /> */}
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Em Tempo Real</h5>
                        <p className='text-secondary'>Com sensores top de linha do mercado, o Soul é capaz de mostrar seus sinais vitais extremamente rapido!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        {/* <img src={thumbs} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} /> */}
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Praticidade</h5>
                        <p className='text-secondary'>O Soul também alerta automaticamente quando algum dos sensores captam valores fora do comum, e se continuar por um determinado período de tempo, ele já agenda uma consulta para você!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
                <div className="headerFoot my-4">
                    <MainSection/>
                </div>
            </Container>
        </div>

  )


}