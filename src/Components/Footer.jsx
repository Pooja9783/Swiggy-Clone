// import React from "react";
// import { makeStyles } from '@mui/styles';
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import Grid from '@mui/material/Grid'



// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   footer: {
//     width: "80%",
//     margin: "auto !important",
//     background: "#000",
//     padding: "50px 0px",
//   },
//   h4: {
//     color: "gray",
//     fontSize: "15px",
//     textTransform: "uppercase",
//     fontWeight: "600",
//     paddingBottom: "10px",
//   },

//   p: {
//     fontSize: "17px",
//     padding: "0px 15px",
//   },
//   img: {
//     margin: "10px 0px",
//   },
//   logo: {
//     width: "142px",
//   },
//   icon: {
//     margin: "0px 10px",
//   },
// });




// export default function Footer() {
//   const classes = useStyles();

//   return (
//     <div style={{ background: "#000", width: "100%" }}>
//       <div className={classes.footer}>
//         <div className={classes.root}>
//           <Grid container pt={2}>
//             <Grid item lg={3} sm={4} xs={12}>
//               <h4 className={classes.h4}>COMPANY</h4>
//               <p>About us</p>
//               <p>Team</p>
//               <p>Careers</p>
//               <p>Swiggy Blog</p>
//               <p>Bug Bounty</p>
//               <p>Swiggy One</p>
//               <p>Swiggy Corporate</p>
//               <p>Swiggy Instamart</p>
//             </Grid>
//             <Grid item lg={3} sm={4} xs={12}>
//               <h4 className={classes.h4}>CONTACT</h4>
//               <p>Help & Support</p>
//               <p>Partner with us</p>
//               <p>Ride with us</p>
//             </Grid>
//             <Grid lg={3} sm={4} xs={12}>
//               <h4 className={classes.h4}>LEGAL</h4>
//               <p>Terms & Conditions</p>
//               <p>Refund & Cancellation</p>
//               <p>Privacy Policy</p>
//               <p>Cookie Policy</p>
//               <p>Offer Terms</p>
//               <p>Phishing & Fraud</p>
//             </Grid>
//             <Grid lg={3} sm={4} xs={12}>
//               <img
//                 className={classes.img}
//                 src={
//                   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
//                 }
//                 alt=""
//               />
//               <img
//                 className={classes.img}
//                 src={
//                   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
//                 }
//                 alt=""
//               />
//             </Grid>
//           </Grid>
//           <hr />
//           <Grid container pt={2}>
//             <Grid item xs={12}>
//               <h4 className={classes.h4}>WE DELIVER TO</h4>
//             </Grid>
//           </Grid>
//           <Grid container pt={2}>
//             <Grid item lg={3} sm={4} xs={12}>
//               <p>Abohar </p>
//               <p>Adilabad</p>
//               <p>Adityapur</p>
//               <p> Adoni</p>
//               <p>Agartala </p>
//               <p>Agra</p>
//               <p>Ahmedabad</p>
//               <p>Ahmednagar</p>
//               <p>Mumbai </p>
//               <p>Munger</p>
//               <p>Murdeshwar </p>
//               <p>Murshidabad</p>
//               <p>Mussoorie</p>
//               <p>Muvattupuzha</p>
//               <p>Muzaffarnagar</p>
//               <p>Solapur Surat</p>
//               <p>Sonipat</p>
//               <p>South-Goa</p>
//               <p>Tumakuru</p>
//               <p>Kalna</p>
//             </Grid>
//             <Grid item lg={3} sm={4} xs={12}>
//               <p>Aizawl </p>
//               <p>Ajmer</p>
//               <p> Alappuzha</p>
//               <p>Akola</p>
//               <p>Aligarh</p>
//               <p>Alipurduar </p>
//               <p>Allahabad</p>
//               <p>Almora</p>
//               <p>Alwar</p>
//               <p>Sri-Ganganagar</p>
//               <p>Srikakulam</p>
//               <p>Srivilliputhur</p>
//               <p>Sultanpur</p>
//               <p>Tirupur </p>
//               <p>Tiruttani</p>
//               <p>Tiruvannamalai</p>
//               <p>Tohana</p>
//               <p>Tonk</p>
//               <p>Trichy </p>
//             </Grid>
//             <Grid lg={3} sm={4} xs={12}>
//               <p>Ambikapur </p>
//               <p>Ambur</p>
//               <p>Amravati</p>
//               <p>Amreli</p>
//               <p>Amritsar</p>
//               <p>Amroha</p>
//               <p>Anand</p>
//               <p>Anantapur</p>
//               <p>Angul</p>
//               <p>Ankleshwar</p>
//               <p>Tuni</p>
//               <p> Udaipur</p>
//               <p> Kamareddy</p>
//               <p> Kanchrapara</p>
//               <p>Dahanu </p>
//               <p>Dahod</p>
//               <p>Daltonganj </p>
//               <p>Daman</p>
//             </Grid>
//             <Grid lg={3} sm={4} xs={12}>
//               <p>Port-Blair </p>
//               <p>Pratapgarh</p>
//               <p>Proddatur</p>
//               <p>Yavatmal</p>
//               <p>Yamuna-Nagar</p>
//               <p>Virudhunagar </p>
//               <p>Visnagar</p>
//               <p>Vizag</p>
//               <p>Vizianagaram</p>
//               <p>Vyara</p>
//               <p>Waidhan </p>
//               <p>Warangal</p>
//               <p>Wardha</p>
//               <p>Washim</p>
//               <p>Wayanad</p>
//             </Grid>{" "}
//             <Grid lg={4} sm={4} xs={12}>
//               <hr />

//               <img
//                 className={classes.logo}
//                 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
//                 alt=""
//               />
//             </Grid>
//             <Grid lg={4} sm={4} xs={12}>
//               <hr />

//               <h5>© 2022 Swiggy</h5>
//             </Grid>
//             <Grid lg={4} sm={4} xs={12}>
//               <hr />
//               <FacebookIcon className={classes.icon} />
//               <PinterestIcon className={classes.icon} />
//               <InstagramIcon className={classes.icon} />
//               <TwitterIcon className={classes.icon} />
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     </div>
//   );
// }
