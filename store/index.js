export const state = () => ({
    page: 0,
    questions: [
        {
            q: "당신은 외향적인가요?",
            a: [
                {
                    text: "네",
                    value: "e"
                },
                {
                    text: "아니오",
                    value: "i",
                }
            ]
        },
        {
            q: "당신은 감각적인가요?",
            a: [
                {
                    text: "네",
                    value: "s"
                },
                {
                    text: "아니오",
                    value: "n",
                }
            ]
        },
        {
            q: "당신은 감정적인가요?",
            a: [
                {
                    text: "네",
                    value: "f"
                },
                {
                    text: "아니오",
                    value: "t",
                }
            ]
        },
        {
            q: "당신은 계획적인가요?",
            a: [
                {
                    text: "네",
                    value: "j"
                },
                {
                    text: "아니오",
                    value: "p",
                }
            ]
        },
    ],
    result: {
        e: 0,
        i: 0,
        s: 0,
        n: 0,
        t: 0,
        f: 0,
        p: 0,
        j: 0
    }
});

export const mutations = {
    // 질문응답결과 저장
    SET_USER_TYPE(state, type) {
        state.result[type] += 1;
        state.page += 1;
    },
    // 페이지만 변경
    SET_PAGE(state, page) {
        state.page = page;
        console.log("page : " + page);
    },
    PAGE_RESET(state) {
        state.page = 0;
        state.result = {
            e: 0,
            i: 0,
            s: 0,
            n: 0,
            t: 0,
            f: 0,
            p: 0,
            j: 0
        };
    }
};

export const actions = {
    clickButton ({commit}, type) {
        commit("SET_USER_TYPE", type);
    },
    clickResetButton({ commit }) {
        commit("PAGE_RESET");
    }
};