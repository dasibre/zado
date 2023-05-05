export const choicesLazyLoad = ({questionType,questionName, data}) => {
    return (_, options) => {
        if (options.question.getType() === questionType && options.question.name === questionName) {
            options.setItems(data.items, data.size)
          }
    }
}