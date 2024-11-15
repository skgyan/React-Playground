export const RecursiveFolder = () => {
    const folders = [
        {
            name: 'Home',
            folders: [
                {
                    name: 'Movies',
                    folders: [
                        {
                            name: 'Action',
                            folders: [
                                {
                                    name: '2000s'
                                },
                                {
                                    name: '2010'
                                }
                            ]
                        },
                        {
                            name: 'Thriller'
                        }
                    ]
                },
                {
                    name: 'Music',
                    folders: [
                        {
                            name: 'Rock'
                        },
                        {
                            name: 'Classical'
                        }
                    ]
                },
                { name: 'Pictures' },
                { name: 'Documents' }
            ]
        }
    ];

    return <div>
        <ul>
            {
                folders.map((folder) => (
                    <li>{folder.name}
                    <ul>
                    
                        {folder.folders && 
                            folder.folders.map((folder) => (
                                <li>{folder.name}</li>
                            ))
                        }
                        
                    </ul>
                    </li>
                ))
            }
        </ul>
    </div>
}



