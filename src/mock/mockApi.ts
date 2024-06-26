import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const axiosInstance = axios.create()

const mock = new MockAdapter(axiosInstance)

mock.onGet('/api/blog/posts').reply(200, () =>
    [
        {
            title: "День невиданной щедрости",
            description: "с 13 по 15 апреля",
            id: 1
        },
        {
            title: "День невиданной щедрости",
            description: "с 13 по 15 апреля",
            id: 1
        },
        {
            title: "День невиданной щедрости",
            description: "с 13 по 15 апреля",
            id: 1
        },
        {
            title: "День невиданной щедрости",
            description: "с 13 по 15 апреля",
            id: 1
        },
        {
            title: "День невиданной щедрости",
            description: "с 13 по 15 апреля",
            id: 1
        },
    ]
)

mock.onGet('/api/gym/sportlite').reply(200, () => (
    {
        name: "СпортЛайт",
        photos: [],
        description: [
            "Школьный спортивный клуб - общественная организация учителей и обучающихся, способствующая развитию физической культуры, спорта и туризма в школе. Школьный спортивный клуб создаётся с целью организации и проведения спортивно-масовой работы в Учреждении во внеурочное время. Общее руководство клубом осуществляется Советом клуба. Состав Совета клуба утверждается приказом директора Учреждения. Школьный спортивный клуб имеет своё название.",
            "Школьный спортивный клуб - общественная организация учителей и обучающихся, способствующая развитию физической культуры, спорта и туризма в школе. Школьный спортивный клуб создаётся с целью организации и проведения спортивно-масовой работы в Учреждении во внеурочное время. Общее руководство клубом осуществляется Советом клуба. Состав Совета клуба утверждается приказом директора Учреждения. Школьный спортивный клуб имеет своё название.",
            "Школьный спортивный клуб - общественная организация учителей и обучающихся, способствующая развитию физической культуры, спорта и туризма в школе. Школьный спортивный клуб создаётся с целью организации и проведения спортивно-масовой работы в Учреждении во внеурочное время. Общее руководство клубом осуществляется Советом клуба. Состав Совета клуба утверждается приказом директора Учреждения. Школьный спортивный клуб имеет своё название.",
            "Школьный спортивный клуб - общественная организация учителей и обучающихся, способствующая развитию физической культуры, спорта и туризма в школе. Школьный спортивный клуб создаётся с целью организации и проведения спортивно-масовой работы в Учреждении во внеурочное время. Общее руководство клубом осуществляется Советом клуба. Состав Совета клуба утверждается приказом директора Учреждения. Школьный спортивный клуб имеет своё название.",
            "Школьный спортивный клуб - общественная организация учителей и обучающихся, способствующая развитию физической культуры, спорта и туризма в школе. Школьный спортивный клуб создаётся с целью организации и проведения спортивно-масовой работы в Учреждении во внеурочное время. Общее руководство клубом осуществляется Советом клуба. Состав Совета клуба утверждается приказом директора Учреждения. Школьный спортивный клуб имеет своё название.",
            "Школьный спортивный клуб - общественная организация учителей и обучающихся, способствующая развитию физической культуры, спорта и туризма в школе. Школьный спортивный клуб создаётся с целью организации и проведения спортивно-масовой работы в Учреждении во внеурочное время. Общее руководство клубом осуществляется Советом клуба. Состав Совета клуба утверждается приказом директора Учреждения. Школьный спортивный клуб имеет своё название.",
        ],
        location: {
            coordinates: [55.751433, 37.618878],
            description: "Спортивный Клуб",
            name: "Aikido Club"
        }
    }
))

mock.onGet('/api/gym/sportlite/trainers').reply(200, () =>
    [
        {
            name: "Генадин Леонид Васильевич",
            description: [
                "Заслуженный тренер России",
                "Призер чемпионата мира 2029"
            ],
            phone: "+22823984",
            email: "dafjhkla@gmail.com",
            photo: null,
            gyms: ["sportlite", "sport228"]
        },
        {
            name: "Викторина Анна Геннадьевна",
            description: [
                "Заслуженный тренер России",
                "Призер чемпионата мира 2079"
            ],
            photo: null
        }
    ]
)

mock.onGet('/api/gym/sportlite/schedule').reply(200, () => {
    //todo
}
)

mock.onGet('/api/trainer/1').reply(200, () => (
    {
        name: "Генадин Леонид Васильевич",
        description: [
            "Заслуженный тренер России",
            "Призер чемпионата мира 2029"
        ],
        gyms: ["sportlite"],
        photo: null
    }
)
)

mock.onGet('/api/trainer/1/schedule').reply(200, () => {
    //todo
}
)