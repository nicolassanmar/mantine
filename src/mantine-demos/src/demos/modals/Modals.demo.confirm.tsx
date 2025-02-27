import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { MantineDemo } from '@mantine/ds';
import { showNotification } from '@mantine/notifications';

const code = `
import { Button, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';

function Demo() {
  const openModal = () => openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`;

function Demo() {
  const openModal = () =>
    openConfirmModal({
      modalId: 'test-id',
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      onCancel: () =>
        showNotification({
          title: 'Canceled',
          message: 'Confirm modal was canceled',
          color: 'gray',
        }),
      onConfirm: () =>
        showNotification({
          title: 'Confirmed',
          message: 'Confirm modal was confirmed',
          color: 'teal',
        }),
    });

  return (
    <Group position="center">
      <Button onClick={openModal}>Open confirm modal</Button>
    </Group>
  );
}

export const confirm: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
