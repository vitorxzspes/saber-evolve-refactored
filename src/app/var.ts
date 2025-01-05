export const projectsVar = {
    pessoais: {
        cmhub: {
            // INTERFACES
            api: process.env.NEXT_PUBLIC_INTERFACE_CMHUB_BACK_END,
            site_link: process.env.NEXT_PUBLIC_INTERFACE_CMHUB_FRONT_END,
            mobile: process.env.NEXT_PUBLIC_INTERFACE_CMHUB_MOBILE,
            windows: process.env.NEXT_PUBLIC_INTERFACE_CMHUB_WINDOWS,
            // REPOSITÓRIOS
            rep_front_end: process.env.NEXT_PUBLIC_REPOSITORIO_CMHUB_FRONT_END,
            rep_back_end: process.env.NEXT_PUBLIC_REPOSITORIO_CMHUB_BACK_END,
        }
    }
}
