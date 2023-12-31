import { ButtonElement } from "../../../components/elements/button";
import FooterComponent from "../../../components/elements/footer/FooterComponent";
import { NavbarComponent } from "../../../components/navbar";
import "./css/beranda.css";
import { BsCashCoin } from "react-icons/bs";
import { LuPalmtree } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import ArtikelSampah from "./components/ArtikelSampah";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardItem from "./components/CardItems";


const Beranda = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const kirimSampahSection = document.getElementById("kirim-sampah");
    if (kirimSampahSection) {
      kirimSampahSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [user, setUser] = useState({
    balance: 0,
    email: "",
    exp: 0,
    name: "",
    userId: 0,
    role: "",
  });

  

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate ("/")
    }else {
      const data = JSON.parse (localStorage.getItem ("userData"));
      setUser ({
    balance: data.balance,
    email: data.email,
    exp: data.exp,
    name: data.name,
    userId: data.userId,
    role: data.role,
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 


  return (
    <>
      <NavbarComponent/>
      <div className="container-fluid mt-5">
        <div className="d-flex gap-4 align-items-center">
          <img
            src="/hero-beranda.webp"
            className="gambar-hero-beranda"
          />
          <div className="deskripsi">
            <h1 className="header-beranda">
              Raih Penghasilan tambahan dan Tingkatkan Lingkungan Bersih
            </h1>
            <p className="deskripsi-beranda">Yuk Sapu lingkungan kita!</p>
            <ButtonElement
              className="btn btn-success"
              handleClick={handleClick}
            >
              Mulai
            </ButtonElement>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white mt-5 py-4">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 welcome p-4 text-center">
          <p>Hello <span>{user.name}</span></p>
          <p>Total Pendapatan kamu <span>Rp. {(user.balance).toLocaleString("id-ID")}</span> di website ini</p>
        </div>
        <div className="col-lg-6 col-12 text-center">
          <img src="/ilustrasi.svg" alt="gambar save earth" height={300}/>
        </div>
      </div>
        <h2 className="section-fitur text-center">Fitur</h2>
        <hr className="line-header" />
        <div className="card-fitur d-flex gap-4 justify-content-center">
          <div className="card">
            <div className="card-body">
              <div className="icon-fitur-beranda">
                <BsCashCoin size={30} color="white" />
              </div>
              <div className="deskripsi-fitur-beranda">
                Meningkatkan Penghasilan
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="icon-fitur-beranda">
                <LuPalmtree size={30} color="white" />
              </div>
              <div className="deskripsi-fitur-beranda">
                Meningkatkan Kebersihan Lingkungan
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="icon-fitur-beranda">
                <MdOutlineProductionQuantityLimits size={30} color="white" />
              </div>
              <div className="deskripsi-fitur-beranda">
                Membantu Membuat Produk Baru
              </div>
            </div>
          </div>
        </div>
        <ArtikelSampah />
        <CardItem/>
      </div>
      <FooterComponent />
    </>
  );
};

export default Beranda;
