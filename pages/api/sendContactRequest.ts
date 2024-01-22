import { NextApiRequest, NextApiResponse } from "next"
import client from "@sendgrid/client"

client.setApiKey(process.env.SENDGRID_API_KEY ?? "")

export default function sendContactRequest(req: NextApiRequest, res: NextApiResponse) {
  const request = {
    url: "/v3/mail/send",
    method: "POST" as const,
    body: {
      from: {
        email: "contact@phorus.group",
      },
      personalizations: [
        {
          to: [
            {
              email: "contact@phorus.group",
            },
          ],
          dynamic_template_data: {
            contactEmail: req.body.contactEmail,
            contactName: req.body.contactName,
            contactSurname: req.body.contactSurname,
            contactDetails: req.body.contactDetails,
            contactCompany: req.body.contactCompany,
          },
        },
      ],
      template_id: "d-a0fb5dac288645a08e05e0f1e0203ac7",
    },
  }

  client
    .request(request)
    .then(([response, body]) => {
      if (response.statusCode === 202) {
        res
          .status(200)
          .setHeader("Content-Type", "application/json")
          .end(
            JSON.stringify({
              response: "Contact request sent successfully",
            }),
          )
      } else {
        res
          .status(response.statusCode)
          .setHeader("Content-Type", "application/json")
          .end(
            JSON.stringify({
              response: "Error sending contact request",
            }),
          )
      }
    })
    .catch((error) => {
      console.error(error)
      res
        .status(500)
        .setHeader("Content-Type", "application/json")
        .end(
          JSON.stringify({
            response: "Error sending contact request",
          }),
        )
    })
}
