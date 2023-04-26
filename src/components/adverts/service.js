import client from "../../api/Client";

const advertsUrl = 'api/v1/adverts'

export const getLatestAdverts = () => {
    return client.get(advertsUrl)
}