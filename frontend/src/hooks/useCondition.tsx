const useCondition = (condition: string) => {
    const state = condition === 'new'
        ? 'Nuevo'
        : condition === 'used'
            ? 'Usado'
            : 'Sin especificar'

    return state
}

export default useCondition