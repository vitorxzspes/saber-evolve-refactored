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
        },
        amos: {
            // INTERFACES
            api: process.env.NEXT_PUBLIC_INTERFACE_AMOS_BACK_END,
            site_link: process.env.NEXT_PUBLIC_INTERFACE_AMOS_FRONT_END,
            mobile: process.env.NEXT_PUBLIC_INTERFACE_AMOS_MOBILE,
            windows: process.env.NEXT_PUBLIC_INTERFACE_AMOS_WINDOWS,
            // REPOSITÓRIOS
            rep_front_end: process.env.NEXT_PUBLIC_REPOSITORIO_AMOS_FRONT_END,
            rep_back_end: process.env.NEXT_PUBLIC_REPOSITORIO_AMOS_BACK_END,
        },
        taskpilot: {
            // INTERFACES
            api: process.env.NEXT_PUBLIC_INTERFACE_TASKPILOT_BACK_END,
            site_link: process.env.NEXT_PUBLIC_INTERFACE_TASKPILOT_FRONT_END,
            mobile: process.env.NEXT_PUBLIC_INTERFACE_TASKPILOT_MOBILE,
            windows: process.env.NEXT_PUBLIC_INTERFACE_TASKPILOT_WINDOWS,
            // REPOSITÓRIOS
            rep_front_end: process.env.NEXT_PUBLIC_REPOSITORIO_TASKPILOT_FRONT_END,
            rep_back_end: process.env.NEXT_PUBLIC_REPOSITORIO_TASKPILOT_BACK_END,
        },
        econvert: {
            // INTERFACES
            api: process.env.NEXT_PUBLIC_INTERFACE_ECONVERT_BACK_END,
            site_link: process.env.NEXT_PUBLIC_INTERFACE_ECONVERT_FRONT_END,
            mobile: process.env.NEXT_PUBLIC_INTERFACE_ECONVERT_MOBILE,
            windows: process.env.NEXT_PUBLIC_INTERFACE_ECONVERT_WINDOWS,
            // REPOSITÓRIOS
            rep_front_end: process.env.NEXT_PUBLIC_REPOSITORIO_ECONVERT_FRONT_END,
            rep_back_end: process.env.NEXT_PUBLIC_REPOSITORIO_ECONVERT_BACK_END,
        }
    }
}
