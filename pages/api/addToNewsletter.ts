import { NextApiRequest, NextApiResponse } from "next"
import client from "@sendgrid/client"

client.setApiKey(process.env.SENDGRID_API_KEY ?? "")
const NEWSLETTER_LIST_ID = process.env.SENDGRID_NEWSLETTER_LIST_ID ?? ""

export default function addToNewsletter(req: NextApiRequest, res: NextApiResponse) {
  const request = {
    url: "/v3/marketing/contacts",
    method: "PUT" as const,
    body: {
      list_ids: [NEWSLETTER_LIST_ID],
      contacts: [
        {
          email: req.body.email,
        },
      ],
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
              response: "Mail added to newsletter list successfully",
            }),
          )
      } else {
        res
          .status(response.statusCode)
          .setHeader("Content-Type", "application/json")
          .end(
            JSON.stringify({
              response: "Error adding mail to newsletter list",
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
            response: "Error adding mail to newsletter list",
          }),
        )
    })
}
