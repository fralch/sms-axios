<?php

function EnviarMensajeVoucher() {
    $data = [
        'message' => "TICKET_PAGO: 4-4-23-1
            P_CUOTAS(x2): S/ 200.00
            P_MONTO: S/ 50.00
            P_MORA: S/ 3.00
            P_NOTIF: S/ 5.00
            TOTAL_PAGO: S/ 208.00
            ***Credipyme***",
        'tpoa' => '22435',
        'recipient' => [
            [
                'msisdn' => '51955537957',
            ],
        ],
    ];

    $authorization = base64_encode("soporte_ti@credipyme.com.pe:Dy2TUw7EErKiUYLYZodnO9fc7N7pVOXp");

    $headers = [
        'Content-Type: application/json',
        'Authorization: Basic ' . $authorization,
    ];

    $url = 'https://api.labsmobile.com/json/send';

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);

    curl_close($ch);

    // Puedes manejar la respuesta según tus necesidades
    var_dump($response);
}

EnviarMensajeVoucher();
?>