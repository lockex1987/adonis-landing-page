import Env from '@ioc:Adonis/Core/Env'

const services = {
    sso: {
        consumerDomain: Env.get('SSO_CONSUMER_DOMAIN'),
        passportUrl: Env.get('SSO_PASSPORT_URL'),
        adminUrl: Env.get('SSO_ADMIN_URL'),
    },
}

export default services
