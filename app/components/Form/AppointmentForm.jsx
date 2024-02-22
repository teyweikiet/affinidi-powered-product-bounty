import { useMediaQuery } from '@mantine/hooks'

import { useState } from 'react'
import { Stepper, Button, Group, TextInput, Modal, Center, Text, Chip, InputWrapper } from '@mantine/core'
import { useForm } from '@mantine/form'

import { IconCalendarEvent } from '@tabler/icons-react'
import { DateInput } from '@mantine/dates'
import { useAuthentication } from '@/app/lib/hooks/useAuthentication'

export function AppointmentForm ({ opened, close, doctor }) {
  const isMobile = useMediaQuery('(max-width: 50em)')
  const [active, setActive] = useState(0)
  const { user } = useAuthentication()

  const form = useForm({
    initialValues: {
      date: '',
      time: '',
      givenName: user?.givenName ?? '',
      familyName: user?.familyName ?? '',
      gender: user?.gender ?? '',
      birthdate: user?.birthdate ? new Date(user?.birthdate) : '',
      email: user?.email ?? '',
      phoneNumber: user?.phoneNumber ?? '',
      address: user?.streetAddress ?? '',
      postalCode: user?.postalCode ?? '',
      city: user?.locality ?? '',
      country: user?.country ?? ''
    },

    validate: (values) => {
      if (active === 0) {
        return {
          date: !values.date
            ? 'Invalid date'
            : null,
          time:
            !values.time
              ? 'Choose a time slot'
              : null
        }
      }

      if (active === 1) {
        return {
          givenName: !values.givenName ? 'Invalid given name' : null,
          familyName: !values.familyName ? 'Invalid family name' : null,
          gender: !values.gender ? 'Invalid gender' : null,
          birthdate: !values.birthdate ? 'Invalid birth date' : null,
          email: !values.email ? 'Invalid email' : null,
          phoneNumber: !values.phoneNumber ? 'Invalid phone number' : null,
          address: !values.address ? 'Invalid address' : null,
          postalCode: !values.postalCode ? 'Invalid postal code' : null,
          city: !values.city ? 'Invalid city' : null,
          country: !values.country ? 'Invalid country' : null
        }
      }

      return {}
    }
  })

  const nextStep = () =>
    setActive((current) => {
      return current < 2 ? current + 1 : current
    })

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  return (
      <Modal
        opened={opened}
        onClose={() => {
          close()
          setActive(0)
          form.reset()
        }}
        title={`Make An Appointment with Dr. ${doctor?.name}`}
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
        closeOnClickOutside={false}
      >
        <Stepper
          active={active}
          breakpoint='sm'
        >
          <Stepper.Step label='First step' description='Select slot'>
            <DateInput
              label='Appointment Date'
              placeholder='Pick date for your appointment'
              required
              {...form.getInputProps('date')}
              minDate={new Date()}
            />

            <InputWrapper
              label="Appointment Time"
              required
              {...form.getInputProps('time')}
            >
              <Chip.Group
                {...form.getInputProps('time')}
              >
                <Group justify="center">
                  {
                    ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
                      <Chip
                        key={time}
                        value={time}
                      >
                        {time}
                      </Chip>
                    ))
                  }
                </Group>
              </Chip.Group>
            </InputWrapper>
          </Stepper.Step>

          <Stepper.Step label='Second step' description='Enter details'>
            <TextInput
              label='Given Name'
              placeholder='John'
              required
              minLength={1}
              {...form.getInputProps('givenName')}
            />
            <TextInput
              label='Family Name'
              placeholder='Doe'
              required
              minLength={1}
              {...form.getInputProps('familyName')}
            />
            <TextInput
              label='Gender'
              placeholder='Male'
              required
              minLength={1}
              {...form.getInputProps('gender')}
            />
            <DateInput
              label='Date of Birth'
              placeholder='2000-02-29'
              required
              {...form.getInputProps('birthdate')}
              minDate={new Date()}
            />
            <TextInput
              label='Email'
              placeholder='johndoe@email.com'
              type='email'
              required
              minLength={1}
              {...form.getInputProps('email')}
            />
            <TextInput
              label='Phone Number'
              placeholder='0123456789'
              required
              minLength={1}
              {...form.getInputProps('phoneNumber')}
            />
            <TextInput
              label='Address'
              placeholder='10 Downing St'
              required
              minLength={1}
              {...form.getInputProps('address')}
            />
            <TextInput
              label='Postal Code'
              placeholder='SW1A 2AB'
              required
              minLength={1}
              {...form.getInputProps('postalCode')}
            />
            <TextInput
              label='City'
              placeholder='London'
              required
              minLength={1}
              {...form.getInputProps('city')}
            />
            <TextInput
              label='Country'
              placeholder='United Kingdom'
              required
              minLength={1}
              {...form.getInputProps('country')}
            />
          </Stepper.Step>

          <Stepper.Completed>
            <Center h={150} m='md'>
              <IconCalendarEvent
                size='md'
              />
            </Center>
            <Center>
              <Text size='xl'>Your appointment is confirmed!</Text>
            </Center>
          </Stepper.Completed>
        </Stepper>

        <Group position='right' mt='xl'>
          {active === 1 && (
            <Button variant='default' onClick={prevStep}>
              Back
            </Button>
          )}
          {active !== 2 && (
            <Button
              onClick={async () => {
                if (form.validate().hasErrors) {
                  return
                }
                if (active === 1) {
                  // TODO: save in some persistent storage
                }
                nextStep()
              }}
            >
              {active === 1 ? 'Submit' : 'Next'}
            </Button>
          )}
        </Group>
      </Modal>
  )
}
