const AddHomework = () => {
    function addClick(evt) {
        let { title, grou_id } = evt.target.elements;

        title = title.value.trim()
        grou_id = title.value.trim()


        fetch('http://localhost:8080/groups/' + {grou_id} + '/homeworks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
             },
             mode: 'cors',
             body: JSON.stringify({
                title,
                grou_id
             })

        })

    }

    const [posts, setPosts] = React.useState()

    React.useEffect(() => {
        fetch('http://localhost:8080/groups').then(data => data.json()).then(data=> {
            setPosts(data)
        } )
    }, [])
    






    return (
        <>
        <div>
            <form action="" onSubmit={addClick}>
                <input type="text" placeholder="homework" name="title" />
                <select name="" id="">{
                    posts && posts.map(post => <option key={post.id} value={post.id}>{post.title}</option>)
                }
                </select>

                <button type="submit">nonv</button>
            </form>
        </div>
        </>
    )
}


export default AddHomework;