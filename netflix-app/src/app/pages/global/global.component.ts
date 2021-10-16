import { Component, OnInit } from '@angular/core';
import { Films, NetflixData} from'./models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
public netflix:NetflixData;
public otherFilms:Films;
  constructor() {
    this.netflix={
      nav:{
        logo:{
          src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
          alt:"Logo netflix"
        },
        item1:"Home",
        item2:"Search"
      },
      hero:{
        title:" LOS 5 MAS POPULARES HOY ",
        img:[
          {
            src:"../../../assets/hero/foto1.png",
            alt:"Michael Jordan"
          },
          {
            src:"../../../assets/hero/foto2.png",
            alt:" A tres metros sobre el cielo"
          },
          {
            src:"../../../assets/hero/foto3.png",
            alt:"Dangerous Lies"
          },          
          {
            src:"../../../assets/hero/foto4.png",
            alt:"Yo Nunca"
          },         
          {
            src:"../../../assets/hero/foto5.png",
            alt:"Mr Robot"
          }
        ]
      },
      films:{
        title:"COMEDIAS",
        img:[
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbp5YmnKdBIqDyNDBV_xCMo7SltZjkjqaeP8DPzOuTzAeX0LwJDrdBvAFGPVIjuZ510sZ6Sw136CsKKllBTRpgaqYUQ.webp?r=fca",
            alt:"Jumanji"
          },
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcUL00CEAfe93cRWGPx7NmStSFwlAJGc2VTVL2E1HsKoTziYTP45DfmfFgN0g3vqupqhYfQqitIgo6AxqJImc44XgWI.webp?r=99e",
            alt:"Lo dejo Cuando Quiera"
          },
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbBxnwW3O5omeOULYKZbRDmLnd773UQiWyBg-r-GI5FVvtPCLT4jB8HaKR0S2Ewb768ssSSmcd9-OiuH_ZfcN4V8hF4.webp?r=cac",
            alt:"Super Lopez"
          },
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABatXMoo2i6AckFTIiWQFDJP3Mi1QLsv99WoPqnWHQZM_dIxweG7hYoz7jqGwv7_F68oNIqCXUnIBzJ3tVG_hGIPEKNA.webp?r=c0e",
            alt:"Minions"
          },
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYWO4VFv-JBlH1LMTcLgqiNQJKaqcGZHbClwWtDwtEvxMk260quNrsSTP3FEzal-RvfBlZqee0WCafcnedd39YZ7m_g.webp?r=340",
            alt:"Regreso al Futuro"
          }

        ]
      }
    }
    this.otherFilms={
      title:"ACCIÓN",
        img:[
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf6tJ9BzmlbkP_XIrwjB4slZ2tm56PN2z4GvaqRR1XKgYK0m3I3CmI5EHm8waziQhJeqoZqFx9ewEI_JYVvL9l7sgIM.webp?r=ba2",
            alt:"Señor y señora Smith"
          },
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb9Dcu9v21JnO9WRYHAHHv_BYPbjXMul0EHvcbWzyL3S3T1s-D1jIZDxSKW0me6JVPFVK6r_yDkkJ4Eq6Opc933xEF0.webp?r=a24",
            alt:"Warecraft"
          },
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABel5C20ZNCpl_0K91PRjObISrNgR6O1ulYEHs3zlGC9WGWlsnkeO833xtiU_AiWEv0WGe0BpzL7_DFallVChPV1Z_Ws.webp?r=855",
            alt:"Baby Driver"
          },
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbsZK9iiyMx24PrVuAIZjMLtnPuntvjXn25jAecGjcAHrr5VCMzWj5-5CFFRlTeDHpguwn3s_-RILvcA_CX44er9Dss.webp?r=86f",
            alt:"Assasins Creed"
          },          
          {
            src:"https://occ-0-3008-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbguGVR2FCf4yW9W--ixI8Hqv3izTKvmnPEDeVQXJwrzU4O3YwtpyCggDYM9ma5T7RZeeJlRJLCsgPCGpttlRG-jYBs.webp?r=18e",
            alt:"Salvar al Soldado Bryan"
          }
        ]
    }
   }


  ngOnInit(): void {
  }

}
