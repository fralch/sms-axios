const axios = require('axios');
function EnviarMensajeVoucher(){
    let data = {
      // TICKET_PAGO: agencia_id-cliente_id-credito_id-carrito_detalle_id
      //
      message: `TICKET_PAGO: 4-4-23-1
      P_CUOTAS(x2): S/ 200.00
      P_MONTO: S/ 50.00
      P_MORA: S/ 3.00
      P_NOTIF: S/ 5.00
      TOTAL_PAGO: S/ 208.00
         ***Credipyme***`,
      tpoa: "22435",
      recipient: [
        {
          msisdn: "51955537957",
        },
      ],
    };
    axios
      .post("https://api.labsmobile.com/json/send", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " +
            btoa("soporte_ti@credipyme.com.pe:Dy2TUw7EErKiUYLYZodnO9fc7N7pVOXp"),
        },
      });
}


EnviarMensajeVoucher();