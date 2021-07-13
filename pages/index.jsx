import { Box } from '../src/components/Box'
import { MainGrid } from '../src/components/MainGrid'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} alt="Perfil" />
    </Box>
  )
}

export default function Home() {
  const user = 'lucas5g'

  const peopleFavorite = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={user} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRealationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2>
              Pessoas da comunidade ({peopleFavorite.length})
            </h2>
            <ul>
          
              {peopleFavorite.map(people => (
                <li>
                  <a href={`/users/${people}`} key={people}>
                    <img src={`https://github.com/${people}.png`} alt={people} />
                    <span>{people}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>

    </>
  )
}