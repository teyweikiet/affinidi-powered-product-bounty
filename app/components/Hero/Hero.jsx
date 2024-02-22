import { Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import classes from './Hero.module.css'
import Link from 'next/link'
import { useAuthentication } from '@/app/lib/hooks/useAuthentication'

export function Hero () {
  const { user } = useAuthentication()

  return (
    <Container
      fluid={true}
      style={{
        height: '90vh'
      }}
    >
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Doctor <span className={classes.highlight}>Appointment</span> made easy
          </Title>
          <Text c="dimmed" mt="md" style={{ fontWeight: 500 }}>
            Easily look for doctors {user?.locality || user?.country ? `in ${user.locality ?? user.country} ` : ''}
            and make appointments - confirmed instantly!
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b style={{ fontWeight: 900 }}>
                Convenience
              </b>
              <Text
                component='span'
                className={classes.listItemDescription}
              >
              &nbsp;– book appointments anytime, anywhere
              </Text>
            </List.Item>
            <List.Item>
              <b style={{ fontWeight: 900 }}>
                Virtual consultations
              </b>
              <Text
                component='span'
                className={classes.listItemDescription}
              >
              &nbsp;– consult with health professionals from the comfort of your home
              </Text>
            </List.Item>
            <List.Item>
              <b style={{ fontWeight: 900 }}>
                Easy referral
              </b>
              <Text
                component='span'
                className={classes.listItemDescription}
              >
              &nbsp;– get referred to nearby hospitals/clinics if further examination is warranted
              </Text>
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} component={Link} href="#doctor-listing">
              Find doctors
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  )
}
